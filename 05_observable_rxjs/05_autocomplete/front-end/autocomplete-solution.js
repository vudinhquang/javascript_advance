/*
$.....evt...evt..evt.....evt.......evt.........evt........evt...evt.........evt.$

---- map -> evt.target.value

$.....'a'...'ab'..'abc'.....'ab'.......'a'.........''......'g'...'ge'.............'g' $

---- deboundTime(400)

$------------------------'abc'---------------------------------- 'ge' ------------'g' $

--- filter => searchStr.length >= 2

$------------------------'abc'---------------------------------- 'ge' -----------....-$

---- map -> makeURL(str)

$------------------------'http://????search=abc'---------------------------------- 'http://????search=ge' ------------$

---- map -> Observable.fetch(url)

$.................... 
  $...................[{}, {}]$ 
                                  $............................[{}, {}].......$   
$


[ { id, label }, { id, label } ]

---- map -> `<div class="list-group-item">{{ label }}</div>`

[ 
  `<div class="list-group-item">{{ label }}</div>`, 
  `<div class="list-group-item">{{ label }}</div>`, 
]

*/