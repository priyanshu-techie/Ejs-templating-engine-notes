const express = require('express');
const app = express();
const port = 20000;

let games = [
    {name:"chess",rank: 1},
    {name:"carrom",rank: 2},
    {name:"ludo",rank: 3},
    {name:"snakes and ladders",rank: 4},
    {name:"monopoly",rank: 5},
    {name:"uno",rank: 6},
    {name:"pictionary",rank: 7},
    {name:"poker",rank: 8},
    {name:"scrabble",rank: 9},
    {name:"checkers",rank: 10,},
    {name:"connect four",rank: 11,},
    {name:"backgammon",rank: 12,},
    {name:"battleship",rank: 13,},
    {name:"dominoes",rank: 14,},
    {name:"go",rank: 15},
    {name:"mahjong",rank: 16,},
    {name:"mastermind",rank: 17,},
    {name:"mancala",rank: 18,},
    {name:"tic-tac-toe",rank: 19,},
    {name:"trivial pursuit", rank:20}
]

app.set('view engine','ejs');
// without ejs👇👇
// app.get('/', (req, res) => { 
//     res.sendFile(__dirname+'/index.html')
// });


//with ejsv👇👇

app.get('/',(req,res)=>{
    let params={
        name:'learning ejs',
        id:2,
        tasks:[ 'eat','sleep','code','repeat'],
        randomWord:'whey'
    }
    res.render('main.ejs',params);
})

// for ejs to read files from folder of different name other than views do this👇👇

//  app.set('views', __dirname+'/renderEngine');

app.get('/api', (req, res) => {
    res.send(games);
    // .send method automatically sets the content type header.
    //There is no actual difference between res.send and res.json, 
    //both methods are almost identical. res.json calls res.send at the end. 
    //When you have an object or array which you have to pass as a response then you can use any one of them
});
app.get('/api/:id',(req,res)=>{
    const id=req.params.id;
    if(id<games.length)
    res.send(games[id]);
    else res.status(404).end("<h1>no such game item found</h1>");
})

app.delete('/api/:id',(req,res)=>{
    const id = Number(req.params.id)+1;
    games = games.filter(game => game.rank !== id)
    console.log(`game number ${id} deleted.`)
    res.status(202).end();
})

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
}
);  