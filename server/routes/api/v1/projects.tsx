import * as express from 'express';

class ProjectsRoute {
    projects: any;

    public path = '/api/v1/projects';
    public router = express.Router();

    constructor() {
        this.intializeRoutes();
    }

    public intializeRoutes() {
        this.router.get(this.path, this.get);
    }

    getProjects(){
        
    const projects = [
        {
            name: "Lighter Steps",
            description: "Summer of Tech Create Camp 2019 - Personalised Environmental Impact Advice.",
            link: "https://summer-of-tech-2019.herokuapp.com/",
            screenshotUrl: "https://github.com/culling/summer-of-tech-2019/raw/master/docs/screenshots/screenshot-01.png",
            github: "https://github.com/culling/summer-of-tech-2019"
        }, {
            name: "Open Library",
            description: "A Book Trading club, able to add your books, request books from others and have requests made from you",
            link: "https://culling-fcc-bookswap2.herokuapp.com/",
            screenshotUrl: "https://github.com/culling/fcc-bookswap-v2/raw/master/docs/screenshot-01.png",
            github: "https://github.com/culling/fcc-bookswap-v2"
        },
        {
            name: "Voting Application",
            description: "Build a voting application",
            link: "https://fcc-votes-v2.herokuapp.com/#",
            screenshotUrl: "https://github.com/culling/fcc-votes-v2/raw/master/docs/screenshot-01.png",
            github: "https://github.com/culling/fcc-votes-v2"
        },
        {
            name: "Rougelike",
            description: "A Rougelike game with fog, enemies, weapons, health and a boss. Terrain is randomly generated",
            link: "https://codepen.io/culling/full/WjbGWV",
            screenshotUrl: "https://raw.github.com/culling/SimpleSite/master/public/src/images/Roguelike/screenshot-01.png"
        },
        {
            name: "Wikipedia Search",
            description: "A search bar for wikipedia displaying a short set of information and a link to the article",
            link: "https://codepen.io/culling/full/mRaqwa/",
            screenshotUrl: "https://raw.github.com/culling/SimpleSite/master/public/src/images/wikipediaSearch/screenshot-01.png"
        }];
        return projects;
    }

    get = (request: express.Request, response: express.Response) => {
        response.json(this.getProjects());
    }
}

export default ProjectsRoute;