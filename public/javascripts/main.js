(() => {
    const pageTitle = document.getElementById("page-title");
    const aboutPageLink = document.getElementById('index');
    const projectsPageLink = document.getElementById('projects');
    const postsPageLink = document.getElementById('posts');
    const contactPageLink = document.getElementById('contact');

    const pageLinks = [aboutPageLink, projectsPageLink, postsPageLink, contactPageLink];

    pageLinks.forEach(pgLink => {
        if (pageTitle.dataset.page === pgLink.id) {
            pgLink.classList.add("nav-list-item__active");
        }
    });

    pageLinks.forEach(pgLink => {

        pgLink.addEventListener('click', (event) => {

            console.log(event, event.target);

            pageLinks.forEach(pl => {
                pl.classList.remove("nav-list-item__active");
            });

            event.target.classList.add("nav-list-item__active");

            window.location.replace(`/${pgLink.id}.html`);
        });

    });
})();