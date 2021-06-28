<?php

namespace App\Controller;

use App\Form\AnnonceContactType;
use App\Repository\AnnoncesRepository;
use App\Repository\CategoriesRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

/**
 * @Route"/annonces", name="annonces_")
 * @package App\Controller
 */

class AnnoncesController extends AbstractController
{

    /**
     * @Route("/annonces", name="liste")
     * @return void
     */
    public function index(AnnoncesRepository $annoncesRepo, CategoriesRepository $catRepo, Request $request)
    {
        //On définit le nombre d'éléments par page
        $limit = 5;

        //On récupère le numéro de la page
        $page = (int)$request->query->get("page", 1);

        // On récupère les filtres
        $filters = $request->get("categories");

        //On récupère les annonces de la page
        $annonces = $annoncesRepo->getPaginatedAnnonces($page, $limit, $filters);

        //On récupère le nombre total d'annonces
        $total = $annoncesRepo->getTotalAnnonces($filters);

        // On vérifie si on a une requête Ajax
        if ($request->get('ajax')) {
            return new JsonResponse([
                'content' => $this->renderView('annonces/_content.html.twig', compact('annonces', 'total', 'limit', 'page'))
            ]);
        }

        // On va chercher toutes les catégories
        $categories = $catRepo->findAll();

       
        return $this->render('annonces/index.html.twig', compact('annonces', 'total', 'limit', 'page', 'categories'));
    }
    

    /**
     * @Route("/details/{slug}", name="details")
     */
    public function details($slug, AnnoncesRepository $annoncesRepo, Request $request): Response
    {
        $annonce = $annoncesRepo->findBy(['slug' => $slug]);

        if (!$annonce) {
            throw new NotFoundHttpException('Pas d\'annonce trouvée');
        }

        $form = $this->createForm(AnnonceContactType::class);

        $contact = $form->handleRequest($request);
    
        return $this->render('users/annonces/details.html.twig', [
            'annonce' => $annonce,
            'form' => $form->createView(),
        
        ]);
    }
}
