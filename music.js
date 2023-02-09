class Music {
    constructor(title, singer, img, file) {
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }

    getName() {
        return this.title + " - " + this.singer;   
    }
}


const musicList = [
    new Music("Boşver","Nilufer","1.jpeg","1.mp3"),
    new Music("BU da Gecer mi Sevgilim","Yalin","2.jpeg","2.mp3"),
    new Music("Aramizda Ucurumlar","Suat Suna","3.jpeg","3.mp3")
]