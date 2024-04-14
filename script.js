$(document).ready(function () {
    $('#fetchThumbnailBtn').click(function () {
        var videoUrl = $('#videoUrl').val();
        if (videoUrl.trim() !== '') {
            var videoId = getYouTubeID(videoUrl);
            if (videoId !== null) {
                var thumbnailUrl = 'https://img.youtube.com/vi/' + videoId + '/maxresdefault.jpg';
                $('#thumbnailContainer').html('<img src="' + thumbnailUrl + '" class="img-fluid rounded">');

                $('#url').attr('value', thumbnailUrl);
                $('#downloadThumbnailBtn').show();
            } else {
                alert('Invalid YouTube URL. Please enter a valid URL.');
            }
        } else {
            alert('Please enter a YouTube URL.');
        }
    });

    function getYouTubeID(url) {
        var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        var match = url.match(regExp);
        if (match && match[2].length === 11) {
            return match[2];
        } else {
            return null;
        }
    }

    //code for gettin the current Year
    const currentYear = new Date().getFullYear();
    $('#getYear').text(currentYear);
});