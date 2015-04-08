var initialCats = [
    {
        clickCount: 0,
        name: 'Tabby1',
        imgSrc: 'img/22252709_010df3379e_z.jpg',
        imgAttribution: 'https://www.flickr.com/photos/bigtallguy',
        nicknames: ['goofy', 'fluffy', 'stinky']
    },
    {
        clickCount: 0,
        name: 'Tabby2',
        imgSrc: 'img/434164568_fea0ad4013_z.jpg',
        imgAttribution: 'https://www.flickr.com/photos/bigtallguy',
        nicknames: ['goober']
    },
    {
        clickCount: 0,
        name: 'Tabby3',
        imgSrc: 'img/1413379559_412a540d29_z.jpg',
        imgAttribution: 'https://www.flickr.com/photos/bigtallguy',
        nicknames: ['hairball']
    },
    {
        clickCount: 0,
        name: 'Tabby4',
        imgSrc: 'img/4154543904_6e2428c421_z.jpg',
        imgAttribution: 'https://www.flickr.com/photos/bigtallguy',
        nicknames: ['tofu']
    },
    {
        clickCount: 0,
        name: 'Tabby5',
        imgSrc: 'img/9648464288_2516b35537_z.jpg',
        imgAttribution: 'https://www.flickr.com/photos/bigtallguy',
        nicknames: ['dirtball']
    }
];


var ViewModel = function () {
    var self = this;
    this.catList = ko.observableArray([]);

    initialCats.forEach(function (catItem) {
        self.catList.push(new Cat(catItem));
    });

    this.currentCat = ko.observable(this.catList()[0]);
    this.incrementCounter = function () {
        this.clickCount(this.clickCount() + 1);
    };
}

var Cat = function (data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.imgAttribution = ko.observable(data.imgAttribution);
    this.nicknames = ko.observableArray(data.nicknames);

    this.title = ko.computed(function () {
        var title;
        var clicks = this.clickCount();
        if (clicks < 10) {
            title = 'Newborn';
        } else if (clicks < 50) {
            title = 'Infant';
        } else if (clicks < 100) {
            title = 'Child';
        } else if (clicks < 200) {
            title = 'Teen';
        } else if (clicks < 500) {
            title = 'Adult';
        } else {
            title = '';
        }
        return title;
    }, this);
}

ko.applyBindings(new ViewModel());