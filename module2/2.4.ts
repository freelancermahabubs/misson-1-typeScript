{
    // interace generic 
    interface Developer <T, Y  = null>{
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number;
        }
        smartWathc: T ;
        bike?: Y
    }

    type EmilabWathc = {
        brand : string;
        model: string;
        dispaly: string;
        
    }

    const poorDeveloper : Developer<EmilabWathc> = {
        name: "Mahabub",
        computer: {
            brand: "ViewSonic",
            model: "X_Yt21",
            releaseYear: 9522,
        },
        smartWathc: {
            brand: "Eilab",
            model: "Le84A",
            dispaly: "Olbd"
        }
    }

    interface AppleWatch {
        brand: string;
        model: string;
        heartTrack: boolean;
        sleepTrack : boolean;
    }
    interface YamhaBike {
        model: string;
        engineCapacity: string
    }
    const richDeveloper : Developer <AppleWatch, YamhaBike> ={
        name : "Rich Dev",
        computer: {
            brand: "Ho",
            model: "Xh1",
            releaseYear: 456,
        },
        smartWathc: {
            brand: "apple",
            model: "Xd7",
            heartTrack: true,
            sleepTrack : false,
        },
        bike: {
            model: "Yahama",
            engineCapacity: '165cc'
        }
    }
    //
}