const conteiner = document.querySelector('.conteiner');
const count = document.getElementById('count');
const amount = document.getElementById('amount');
const select = document.getElementById('movie');
const seats = document.querySelectorAll('.seat:not(.reserved)')
console.log(amount)
getfromlocalstorage()
calctotal()


conteiner.addEventListener('click',function(e){
    if(e.target.classList.contains('seat') &&! e.target.classList.contains('reserved')){
        e.target.classList.toggle('selected');
        calctotal();


    }


})

select.addEventListener('change',function(e){
    calctotal()


})


function getfromlocalstorage(){

    const getLocalstorage=JSON.parse(localStorage.getItem('selectedseats'));

    if(getLocalstorage!==null && getLocalstorage.length>0){
        seats.forEach(function(seat,index){
            if( getLocalstorage.indexOf(index)>-1){
                seat.classList.add('selected')
            }


        })


    }
    const getmoviename=localStorage.getItem('movieName');

    if( getmoviename!==null){
        select.selectedIndex= getmoviename;
    }
}


function calctotal(){

    const selectedseats=conteiner.querySelectorAll('.seat.selected');

    const selectedseatsArr=[];
    const seatsArr=[];

    selectedseats.forEach(function(seat){

        selectedseatsArr.push(seat);
    })

    seats.forEach(function(seat){

        seatsArr.push(seat);


    })

    const seatselectedindexs=selectedseatsArr.map(function(seat){

      return  seatsArr.indexOf(seat);


    })

    console.log(seatselectedindexs);

    let selectedseatcount=conteiner.querySelectorAll('.seat.selected').length;
    let price=select.value;
    count.innerText=selectedseatcount;
    amount.innerText=selectedseatcount*price;



    savelocalstorage(seatselectedindexs);


}




function savelocalstorage(index){
    localStorage.setItem('selectedseats',JSON.stringify(index));
    localStorage.setItem('movieName',select.selectedIndex);
}




















// getfromlocalstorage()
// conteiner.addEventListener('cl
// ick', function (e) {
//     if (e.target.classList.contains('seat') && !e.target.classList.contains('reserved')) {
//         console.log(e.target)

//         e.target.classList.toggle('selected');

//         xxx();
//     }
// })

// select.addEventListener('change', function () {
//     xxx()

// })
// function xxx() {
//     let sss = conteiner.querySelectorAll('.seat.selected')
//     let sssArr = [];
//     let seatArr = [];

//     sss.forEach(function (seat) {
//         sssArr.push(seat);

//     })

//     seats.forEach(function (seat) {
//         seatArr.push(seat);
//     })


//     let seatindexof = sssArr.map(function (seat) {
//         return seatArr.indexOf(seat);
//     })
//     console.log(seatindexof);











//     let ssc = conteiner.querySelectorAll('.seat.selected').length;
//     console.log(ssc);
//     let price = select.value

//     count.innerText = ssc;
//     amount.innerText = ssc * price;


//     localstorage(seatindexof)

// }
// // localstorage  selected olunanlari almaq>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// function getfromlocalstorage() {
//     const sss = JSON.parse(localStorage.getItem('sss'));
//     if(sss !=null&& sss.length>0){
//         seats.forEach(function(seat,index){
//             if(sss.indexOf(index)>-1){
//                 seat.classList.add('selected');
//             }

//         })
//     }




//     const filmname = localStorage.getItem('filmname');
//     if (filmname != null) {
//         select.selectedIndex= filmname
//         console.log(select.selectedIndex);

//     }

// }



// // localstorage  selected olunanlari qeyd etmek>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// function localstorage(indexs) {
//     localStorage.setItem('sss', JSON.stringify(indexs))
//     localStorage.setItem('filmname', select.selectedIndex)


// }
