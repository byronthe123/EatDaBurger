console.log(`js online`);

$(document).on('click', '.btnEatBurger', function() {
    const burgerId = $(this).attr('dataId');
    put(burgerId);
});

const put = (id) => {
    $.ajax('/api/'+id, {
        type: 'PUT',
    }).then(() => {
        location.reload();
    })
}