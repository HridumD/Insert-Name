function generateStory(){
    var profs = [
        'baker', 
        'retired navy seal', 
        'software engineer', 
        'violist', 
        'violinist', 
        'cellist', 
        'actor',
        'singer', 
        'engineer',
        'artist',
        'author',
        'film director',
        'troubled musician'
    ]
    var adjs = [
        'has no confidence',
        'is very egoistical',
        'is easily scared',
        'is very polite',
        'is weak',
        'has a PhD',
        'has lost their talent',
        'is financially unstable'
    ]
    var types = [
        'romantic comedy',
        'romantic suspense',
        'romantic mystery',
        'historical romance',
        'inspirational romance'
    ]
    places = [
        'a beach',
        'a grocery store',
        'a highschool',
        'a gas station'
    ]
    reasons = [
        "someone didn't have enough change",
        "someone's close relative died",
        'someone was trying to buy food'
    ]

    var l1 = 'A ' + profs[Math.floor(Math.random() * profs.length)] + ' who ' + adjs[Math.floor(Math.random() * adjs.length)]
    var l2 = 'A ' + profs[Math.floor(Math.random() * profs.length)] + ' who ' + adjs[Math.floor(Math.random() * adjs.length)]

    var plot = 'A ' + types[Math.floor(Math.random() * types.length)] + ', where the plot starts off at ' + places[Math.floor(Math.random() * places.length)] + '. It starts when ' + reasons[Math.floor(Math.random() * reasons.length)] 

    document.getElementById('pd').innerHTML = plot
    document.getElementById('l1d').innerHTML = l1
    document.getElementById('l2d').innerHTML = l2
}