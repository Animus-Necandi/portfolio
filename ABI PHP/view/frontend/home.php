<?php $title = "Accueil Abi"; ?>

<?php ob_start(); ?>



<section class="home">
    <article class="videoContainer">
        <video src="../pictures/video.mp4" controls poster="../pictures/fondvideo.png" id="video"></video>
    </article>
    <article class="welcome">
        ACTIVE BRETAGNE INFORMATIQUE is specialized in IT Services and Engineering Company projects.
        We operate mainly in the Brittany region, mostly with SME / SMI specialized in Agro-food.
        We generally adopt a Scrum approach to carry out ours developments.
    </article>
</section>
<?php $content = ob_get_clean(); ?>

<?php require('../view/template/template.php'); ?>