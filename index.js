'use strict'

// picture changing is start 
{
    const sources = [
        {src : "image1.jpg"},
        {src : "image2.jpg"},
        {src : "image3.jpg"},
        {src : "image4.jpg"}
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
            alert("مرسی که منو انتخاب کردی ! بوس بهت");
        }

        _noo(){
            alert("دلت میاد دل این پسر خوشگل رو بشکونی ؟؟ با من باش");
        }
    }

    new hearttalke(hearttalkbuttondiv)
}
// hearttalk button is finished 