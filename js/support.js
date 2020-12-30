$('#contact-form').submit(function(e) {
    e.preventDefault();

    var formData = $(form).serialize();
    console.log(formData);
    $.ajax({
        type: 'POST',
        url: $(form).attr('action'),
        data: formData
    })
    .done(function(res) {
        $("#support-form").append("<p>Message sent</p>");
    })
    .fail(function(err) {
        $("#support-form").append("<p>Something went wrong, please try again</p>");
    });

    return false;
});