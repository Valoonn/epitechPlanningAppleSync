import axios from 'axios'

var config = {
    method: 'get',
    url: 'https://intra.epitech.eu/planning/load?format=json&start=2021-09-01&end=2021-12-26',
    headers: {
        'Cookie': 'gdpr=0; user=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsb2dpbiI6InZhbGVudGluLm1hY2VAZXBpdGVjaC5ldSIsInR6IjpudWxsLCJleHAiOjE2NDA3MjQxMTd9.J-fbq_o6OQ_nBnl52Ues-1kMqDUKcGv6dL5-bsjLzac'
    }
};
var activities = []

await axios(config)
    .then((response) => {
        activities = response.data;
    })
    .catch(function (error) {
        console.log(error);
    });

// console.log(activities.filter(act => act.event_registered === "registered"))
activities.forEach(act => {
    if (act.event_registered !== false)
        console.log(act.acti_title + " : " + act.event_registered + " : " + act.start + " : " + act.nb_hours)
})