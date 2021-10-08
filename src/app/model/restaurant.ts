export class Restaurant{

    // Attributes for the Object
    name: string;
    timeToDeliver: number;
    ratings: number;
    categories: string; 

    constructor(name: string, timeToDeliver: number, ratings: number, categories: string){
        this.name = name;
        this.timeToDeliver = timeToDeliver;
        this.ratings = ratings;
        this.categories = categories;
    }

    showRestaurant(){
        console.log(this.name+" ["+this.ratings+"]");
    }

}