/* eslint-env jquery */

(function() {
    const form = document.querySelector('#search-form');
    const searchField = document.querySelector('#search-keyword');
    let searchedForText;
    const responseContainer = document.querySelector('#response-container');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        responseContainer.innerHTML = '';
        searchedForText = searchField.value;
        $.ajax({
            url: `https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`,
            headers: {
                Authorization: 'Client-ID biPfOU7T0oqylU-3TLTxbSETF8u2vmovl1D0owwh0ag'
            }
        }).done(addImage);

        function addImage(images) {
            for (i = 0; i < images.results.length; i++) {
                if (images.results[i]) {
                    const firstImage = images.results[i];

                    responseContainer.insertAdjacentHTML('afterbegin', `<figure>
                    <img src="${firstImage.urls.small}" alt="${searchedForText}">
                    <figcaption>${searchedForText} by ${firstImage.user.name}</figcaption>
                </figure>`);
                }
            }
            if (!images.results[0]) {
                allArray = "<div>No images avalibale</div>"
                responseContainer.insertAdjacentHTML('afterbegin', allArray)
            }
        }

    });
})();