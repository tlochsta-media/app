const games = [
    { id: 1, title: "Duck Life 4", url: "https://ducklife4.pages.dev", image: "/img/ducklife4.jpg", type: "Action" },
    { id: 2, title: "Raise a Floppa", url: "https://raise-a-floppa.pages.dev", image: "/img/raiseafloppa.jpg", type: "Animals" },
    { id: 3, title: "Rooftop Snipers", url: "https://tm-rooftop-snipers.pages.dev", image: "/img/rooftopsnipers.jpg", type: "Shooter" },
    { id: 4, title: "Fruit Ninja", url: "https://tm-fruit-ninja.pages.dev", image: "/img/fruitninja.webp", type: "Action" },
    { id: 5, title: "Bitlife", url: "https://tm-bitlife.pages.dev", image: "/img/bitlife.jpg", type: "Simulation" },
    { id: 6, title: "MotoX3M Spooky", url: "https://tm-motox3m-spooky.pages.dev", image: "/img/motox3mspooky.jpg", type: "Racing" },
    { id: 7, title: "Bacon May Die", url: "https://tm-bacon-may-die.pages.dev", image: "/img/bacon-may-die.jpg", type: "Survival" },
    { id: 8, title: "Minecraft 1.8", url: "https://tm-eagler18.pages.dev", image: "/img/minecraft18.avif", type: "Sandbox" },
    { id: 9, title: "Minecraft 1.5", url: "https://astronetclient.pages.dev/compiled/web", image: "/img/minecraft15.jpg", type: "Sandbox" },
    { id: 10, title: "Monkey Mart", url: "https://monkey-mart.pages.dev", image: "/img/monkeymart.jpg", type: "Simulation" },
    { id: 11, title: "Run 3", url: "https://another-run-3-test-tm.pages.dev/tn6pS9dCf37xAhkJv/", image: "/img/run3.jpg", type: "Endless" },
    { id: 12, title: "Drift Hunters", url: "https://drift-hunters.pages.dev", image: "/img/drift-hunters.jpg", type: "Racing" },
    { id: 13, title: "Hyperspace Racers 3", url: "https://html-classic.itch.zone/html/5658186/index.html", image: "/img/hyperspace-racers-3.jpg", type: "Racing" },
    { id: 14, title: "Eggy Car", url: "https://eggycar.pages.dev", image: "/img/eggy-car.jpg", type: "Survival" },
    { id: 15, title: "Slope", url: "https://slope1.glitch.me/", image: "/img/slope.jpg", type: "Racing" },
    { id: 16, title: "Spank the Monkey", url: "https://tm-app.pages.dev/game_storage/spank_the_monkey/index.html", image: "/img/spankthemonkey.avif", type: "Animals" },
    { id: 17, title: "Basketbros.io", url: "https://tm-app.pages.dev/game_storage/basket_bros/index.html", image: "/img/basketbros.avif", type: "Sports" },
    { id: 18, title: "Doge Miner", url: "https://tm-app.pages.dev/game_storage/DogeMiner/index.html", image: "/img/dogeminer.avif", type: "Simulation" },
];

class TMAPI {
    constructor() {
        this.games = games;
    }

    newSelectElement(selectElement) {
        this.games.forEach(game => {
            const option = document.createElement('option');
            option.value = game.id;
            option.textContent = game.title;
            selectElement.appendChild(option);
        });
    }

    getData(field, id) {
        const game = this.games.find(game => game.id == id);
        return game ? game[field] : null;
    }
}

