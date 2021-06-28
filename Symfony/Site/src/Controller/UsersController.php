<?php

namespace App\Controller;

use Dompdf\Dompdf;
use Dompdf\Options;
use App\Entity\Images;
use App\Entity\Annonces;
use App\Entity\Comments;
use App\Form\AnnoncesType;
use App\Form\CommentsType;
use App\Form\EditProfileType;
use App\Form\AnnonceContactType;
use App\Repository\AnnoncesRepository;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use DateTime;

class UsersController extends AbstractController
{
    /**
     * @Route("/users", name="users")
     */
    public function index(): Response
    {
        return $this->render(
            'users/index.html.twig'
        // , [
        //     'controller_name' => 'UsersController',
        // ]
        );
    }

    /**
     * @Route("/users/annonces/ajout", name="annonces_ajout")
     */
    public function ajoutAnnonce(Request $request): Response
    {
        $annonce = new Annonces;
            
        $form = $this->createForm(AnnoncesType::class, $annonce);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $annonce->setUsers($this->getUser());
            $annonce->setActive(false);

            //On récupère les images transmises
            $images = $form->get('images')->getData();

            //On boucle sur les images
            foreach ($images as $image) {
 
                 //  On génère un nouveau nom de fichier
                $fichier = md5(uniqid()).'.'.$image->guessExtension();
 
                //On copie le fichier dans le dossier uploads
                $image->move(
                    $this->getParameter('images_directory'),
                    $fichier
                );
 
                //On stocke l'image dans la base de données (son nom)
                $img = new Images();
                $img->setName($fichier);
                $annonce->addImage($img);
            }
 

            $em =$this->getDoctrine()->getManager();
            $em->persist($annonce);
            $em->flush();

            return $this->redirectToRoute('users');
        }

        return $this->render('users/annonces/ajout.html.twig', [
            'form' => $form->createView()
        ]);
    }


    /**
        * @Route("/users/profil/modifier", name="users_profil_modifier")
        */
    public function editProfile(Request $request): Response
    {
        $user = $this->getUser();
        $form = $this->createForm(EditProfileType::class, $user);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em =$this->getDoctrine()->getManager();
            $em->persist($user);
            $em->flush();

            $this->addFlash('message', 'Profil mis à jour');
            return $this->redirectToRoute('users');
        }

        return $this->render('users/editprofile.html.twig', [
            'form' => $form->createView()
        ]);
    }


    /**
        * @Route("/users/pass/modifier", name="users_pass_modifier")
        */
    public function editPass(Request $request, UserPasswordEncoderInterface $passwordEncoder): Response
    {
        if ($request->isMethod('POST')) {
            $em = $this->getDoctrine()->getManager();

            $user =$this->getUser();

            //On vérifie que les 2 Mdp sont identiques
            if ($request->request->get('pass') == $request->request->get('pass2')) {
                $user->setPassword($passwordEncoder->encodePassword($user, $request->request->get('pass')));
                $em->flush();
                $this->addFlash('message', 'Mot de passe mis à jour avec succès!');
                return $this->redirectToRoute('users');
            } else {
                $this->addFlash('error', 'Les deux mots de passe ne sont pas identiques');
            }
        }


        return $this->render('users/editpass.html.twig');
    }

    
    /**
     * @Route("/users/data", name="users_data")
     */
    public function UserData(): Response
    {
        return $this->render(
            'users/data.html.twig'
        );
    }

    /**
     * @Route("/users/data/download", name="users_data_download")
     */
    public function UserDataDownload(): Response
    {
        //On définit les options du PDF
        $pdfOptions = new Options();
        //Police par défaut
        $pdfOptions->set('defaultFont', 'Arial');
        $pdfOptions->setIsRemoteEnabled(true);
        //On instancie Dompdf
        $dompdf = new Dompdf($pdfOptions);
        $context = stream_context_create([
            'ssl' => [
                'verify_peer' => false,
                'verify_peer_name' => false,
                'allow_self-signed' => true
            ]
        ]);
        $dompdf->setHttpContext($context);

        //On génère le html
        $html = $this->renderView('users/download.html.twig');

        $dompdf->loadHtml($html);
        $dompdf->setPaper('A4', 'portrait');
        $dompdf->render();

        //On génère un nom de fichier
        $fichier = 'user-data-'.$this->getUser()->getId().'pdf';

        //On envoie le PDF au navigateur
        $dompdf->stream($fichier, [
            'Attachment' => true
        ]);

        return new Response();
    }

    /**
     * @Route("/users/annonces", name="annonces_index", methods={"GET"})
     */
    public function AfficherAnnonce(AnnoncesRepository $annoncesRepository): Response
    {
        return $this->render('users/annonces/index.html.twig', [
            'annonces' => $annoncesRepository->findAll(),
        ]);
    }

    /**
     * @Route("users/annonces/{id}", name="annonces_show", methods={"GET"})
     */
    public function show(Annonces $annonce): Response
    {
        return $this->render('annonces/show.html.twig', [
            'annonce' => $annonce,
        ]);
    }


    /**
     * @Route("/users/annonces/{id}/edit", name="annonces_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Annonces $annonce): Response
    {
        $form = $this->createForm(AnnoncesType::class, $annonce);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            //On récupère les images transmises
            $images = $form->get('images')->getData();

            //On boucle sur les images
            foreach ($images as $image) {
 
                 //  On génère un nouveau nom de fichier
                $fichier = md5(uniqid()).'.'.$image->guessExtension();
 
                //On copie le fichier dans le dossier uploads
                $image->move(
                    $this->getParameter('images_directory'),
                    $fichier
                );
 
                //On stocke l'image dans la base de données (son nom)
                $img = new Images();
                $img->setName($fichier);
                $annonce->addImage($img);
            }

            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('annonces_index');
        }

        return $this->render('users/annonces/edit.html.twig', [
            'annonce' => $annonce,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="annonces_delete", methods={"POST"})
     */
    public function delete(Request $request, Annonces $annonce): Response
    {
        if ($this->isCsrfTokenValid('delete'.$annonce->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($annonce);
            $entityManager->flush();
        }

        return $this->redirectToRoute('annonces_index');
    }

    /**
     * @Route("/users/annonces/supprime/image/{id}", name="annonces_delete_image", methods={"DELETE"})
     */
    public function deleteImage(Images $image, Request $request)
    {
        $data = json_decode($request->getContent(), true);

        // On vérifie si le token est valide
        if ($this->isCsrfTokenValid('delete'.$image->getId(), $data['_token'])) {
            // On récupère le nom de l'image
            $nom = $image->getName();
            // On supprime le fichier
            unlink($this->getParameter('images_directory').'/'.$nom);

            // On supprime l'entrée de la base
            $em = $this->getDoctrine()->getManager();
            $em->remove($image);
            $em->flush();

            // On répond en json
            return new JsonResponse(['success' => 1]);
        } else {
            return new JsonResponse(['error' => 'Token Invalide'], 400);
        }
    }

    /**
     * @Route("/users/annonces/details/{slug}", name="annonces_details")
     */
    public function details($slug, AnnoncesRepository $annoncesRepo, Request $request, MailerInterface $mailer): Response
    {
        $annonce = $annoncesRepo->findOneBy(['slug' => $slug]);

        if (!$annonce) {
            throw new NotFoundHttpException('Pas d\'annonce trouvée');
        }

        $form = $this->createForm(AnnonceContactType::class);

        $contact = $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            //On crée le mail
            $email = (new TemplatedEmail())
            ->from($contact->get('email')->getData())
            ->to($annonce->getUsers()->getEmail())
            ->subject('Contact au sujet de votre annonce "'.$annonce->getTitle().'"')
            ->htmlTemplate('emails/contact_annonce.html.twig')
            ->context([
                'annonce' => $annonce,
                'mail'=> $contact->get('email')->getData(),
                'message' => $contact->get('message')->getData()
            ]);
            //On envoie le mail
            $mailer->send($email);
            //On confirme le mail et on redirige
            $this->addFlash('message', 'Votre e-mail a bien été envoyé');
            return $this->redirectToRoute('annonces_details', ['slug' => $annonce->getSlug()]);
        }
    
        // Partie commentaires
        // On crée le commentaire "vierge"
        $comment = new Comments;

        // On génère le formulaire
        $commentForm = $this->createForm(CommentsType::class, $comment);

        $commentForm->handleRequest($request);

        // Traitement du formulaire
        if ($commentForm->isSubmitted() && $commentForm->isValid()) {
            $comment->setCreatedAt(new DateTime());
            $comment->setAnnonces($annonce);

            // On récupère le contenu du champ parentid
            $parentid = $commentForm->get("parentid")->getData();

            // On va chercher le commentaire correspondant
            $em = $this->getDoctrine()->getManager();

            if ($parentid != null) {
                $parent = $em->getRepository(Comments::class)->find($parentid);
            }

            // On définit le parent
            $comment->setParent($parent ?? null);

            $em->persist($comment);
            $em->flush();

            $this->addFlash('message', 'Votre commentaire a bien été envoyé');
            return $this->redirectToRoute('annonces_details', ['slug' => $annonce->getSlug()]);
        }

        return $this->render('users/annonces/details.html.twig', [
                'annonce' => $annonce,
                'form' => $form->createView(),
                'commentForm' => $commentForm->createView()
            ]);
    }

    /**
     * @Route("/users/annonces/favoris/ajout/{id}", name="ajout_favoris")
     */
    public function ajoutFavoris(Annonces $annonce): Response
    {
        if (!$annonce) {
            throw new NotFoundHttpException('Pas d\'annonce trouvée');
        }
    
        $annonce->addFavori($this->getUser());

        $em = $this->getDoctrine()->getManager();
        $em->persist($annonce);
        $em->flush();
        return $this->redirectToRoute('app_home');
    }

    /**
     * @Route("/users/annonces/favoris/retrait/{id}", name="retrait_favoris")
     */
    public function retraitFavoris(Annonces $annonce): Response
    {
        if (!$annonce) {
            throw new NotFoundHttpException('Pas d\'annonce trouvée');
        }
    
        $annonce->removeFavori($this->getUser());

        $em = $this->getDoctrine()->getManager();
        $em->persist($annonce);
        $em->flush();
        return $this->redirectToRoute('app_home');
    }
}
