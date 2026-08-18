'use strict'

// picture changing is start 
{
    const sources = [
        {src : "image1.png"},
        {src : "image2.png"},
        {src : "image3.png"},
        {src : "image4.png"}
    ];

    const picturediv = document.querySelector(".photoimagecontainer");

    class picture{
        constructor(sources , picturediv){
            this._sources = sources;
            this._picturediv = picturediv;
            this._currentindex = 0;
            this._img = this._picturediv.querySelector('img');


            this._picturediv.addEventListener('click', (e)=> {
                const {target} = e;

                const action = target.dataset.action;

                if(action && `_${action}` in this){
                    this[`_${action}`]();
                }
            })
            this._changesrc(this._currentindex);
        }

        _next() {
            const lastindex = this._sources.length - 1;
            const x = this._currentindex + 1 > lastindex ? 0 : this._currentindex + 1;
            this._changesrc(x);
        }

        _prev() {
            const lastindex = this._sources.length - 1;
            const x = this._currentindex - 1 < 0 ? lastindex : this._currentindex - 1;
            this._changesrc(x);
        }

        _changesrc(index){
            this._currentindex = index;
            this._img.src = this._sources[index].src;
        }
    }

    new picture(sources , picturediv);
}
// picture changing is finished 


// music section is start
{
    const sources2 = [
        {src : 'music1.mp3'},
        {src : 'music2.mp3'},
        {src : 'music3.mp3'}
    ];

    const musicplayer = document.querySelector(".musiccc");

    class music{
        constructor(sources2 , musicplayer){
            this._sources2 = sources2;
            this._musicplayer = musicplayer;
            this._currentindex2 = 0;
            this._changesrc2(this._currentindex2);
            window.addEventListener('click', () => this._play());
            this._musicplayer.addEventListener('ended' , () =>{
                this._currentindex2 ++;

                if(this._currentindex2 > this._sources2.length - 1){
                    this._currentindex2 = 0;
                    this._changesrc2(this._currentindex2);
                }else{
                    this._changesrc2(this._currentindex2);
                }
            });
        }

        _play() {
            this._musicplayer.play();
        }

        _changesrc2(index){
            this._currentindex2 = index;
            this._musicplayer.src = this._sources2[index].src;
            this._play();
        }
    }

    new music(sources2 , musicplayer);
}
// music section is finished 


// hearttalk button is start 
{
    const hearttalkbuttondiv = document.querySelector('.hearttalkbutton');
    
    class hearttalke{
        constructor(hearttalkbuttondiv){
            this._hearttalkbuttondiv = hearttalkbuttondiv;

            this._hearttalkbuttondiv.addEventListener('click' , (e) => {
                const {target} = e;
                const action = target.dataset.action;
                if(action && `_${action}` in this){
                    this[`_${action}`]();
                }
            });
        }

        _okay(){
            alert('بهترین انتخاب عمرت رو کردی !!! بوس بهت .......')
        }

        _noo(){
            alert('دلت میاد پسر به این خوشگلی رو رد بکنی؟؟ بهم یه فرصت بده')
        }
    }

    new hearttalke(hearttalkbuttondiv)
}
// hearttalk button is finished 


// firstpage gofl is start 
{   
    const newtag = document.createElement('h4');
    newtag.textContent = 'قربون خانومی برم !!!!';
    newtag.classList.add('sefareshi');



    const changerang = document.querySelector('.firsttime');
    const goflbox = document.querySelector(".firsttime-content");
    const okaygofl = document.querySelector(".romantic");

    class gofli{
        constructor(goflbox , okaygofl  , newtag , changerang){
            this._goflbox = goflbox;
            this._okaygofl = okaygofl;
            this._newtag = newtag;
            this._changerang = changerang;
            this._onlock = false;

            this._goflbox.addEventListener('click' , (e) => {
                const {target} = e;
                const y = target.dataset.action;
                if(y && `_${y}` in this){
                    this[`_${y}`](target);
                }
            } );  
        }

        _gofl(target){
            if(this._onlock){
                return;
            }
            const x = prompt("Please Enter your password to continue ... ");

            if(x === "moein"){
                alert("your password is correct");
                this._okaygofl.style.display = 'block';
                this._goflbox.append(this._newtag);
                this._changerang.style.background = 'linear-gradient(135deg, #3a1524, #1b0b12)';
                this._onlock = true;
            }else{
                alert("your password is not correct");
            }
        }
    }

    new gofli(goflbox , okaygofl , newtag , changerang);
}
// firstpage gofl is finished 


// my option button is start 
{
    const optionbox = document.querySelector('.myoption_container');
    const opnbutton = document.querySelector('.optionbutton');
    const newoptionboxx = document.querySelector('.newtagbox');

    const newoption = document.createElement('p');
    newoption.textContent = " جیگر بابایی کیه ؟؟";
    newoption.classList.add('newoption');

    class optionn{
        constructor(optionbox , opnbutton , newoption , newoptionboxx){
            this._optionbox = optionbox;
            this._opnbutton = opnbutton;
            this._newoption = newoption;
            this._newoptionboxx = newoptionboxx;

            this._optionbox.addEventListener('click' , (e) =>{
                const {target} = e;

                const action = target.dataset.action;

                if(action && `_${action}` in this){
                    this[`_${action}`]();
                }
            })
        }

        _option(){
            if(this._newoptionboxx.contains(this._newoption)){
                this._newoption.style.display = 'block';
                setTimeout(()=>{
                    this._newoption.style.display = 'none';
                },2000)
            }else{
                this._newoptionboxx.append(this._newoption);
                setTimeout(()=>{
                    this._newoption.style.display = 'none';
                },2000)
            }
        }
    }

    new optionn(optionbox , opnbutton , newoption , newoptionboxx);
}
// my option button is finished 