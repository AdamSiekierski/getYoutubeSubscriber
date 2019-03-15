const axios = require('axios');

module.exports = async function getYoutubeSubscriber(channelID) {
    let responseData;
    await axios.get(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelID}&key=AIzaSyALrxZ6h8bhqnPPIxdu3zur15PfHEO9smM`).then((response) => {
        responseData = response.data.items[0].statistics.subscriberCount
    });
    return responseData
};
