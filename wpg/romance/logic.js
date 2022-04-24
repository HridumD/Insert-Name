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

    var l1 = 'A ' + profs[Math.floor(Math.random() * profs.length)] + ' who ' + adjs[Math.floor(Math.random() * adjs.length)]
    var l2 = 'A ' + profs[Math.floor(Math.random() * profs.length)] + ' who ' + adjs[Math.floor(Math.random() * adjs.length)]

    document.getElementById('l1d').innerHTML = l1
    document.getElementById('l2d').innerHTML = l2
}