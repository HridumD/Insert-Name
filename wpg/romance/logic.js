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
    var places = [
        'a beach',
        'a grocery store',
        'a highschool',
        'a gas station'
    ]
    var reasons = [
        "someone didn't have enough change",
        'someone was trying to buy food',
        // 4/25/2022 update
        'someone was trying to borrow a pencil',
        'someone tripped',
        'someone lost a family heirloom'
    ]

    var l1 = 'A ' + profs[Math.floor(Math.random() * profs.length)] + ' who ' + adjs[Math.floor(Math.random() * adjs.length)]
    var l2 = 'A ' + profs[Math.floor(Math.random() * profs.length)] + ' who ' + adjs[Math.floor(Math.random() * adjs.length)]

    var plot = 'A ' + types[Math.floor(Math.random() * types.length)] + ', where the plot starts off at ' + places[Math.floor(Math.random() * places.length)] + '. It starts when ' + reasons[Math.floor(Math.random() * reasons.length)] + '.' 

    document.getElementById('pd').innerHTML = plot
    document.getElementById('l1d').innerHTML = l1
    document.getElementById('l2d').innerHTML = l2
}