export class Country {
    constructor(data) {
        this.name = data.name.common;
        this.oficialName = data.name.official;
        this.currency = Object.values(data.currencies)[0].name;
        this.capital = data.capital[0];
        this.region = data.region;
        this.subregion = data.subregion;
        this.languages = Object.values(data.languages).join(', ');
        this.area = data.area;
        this.population = data.population;
        this.flagImage = data.flags.png;
        this.coatOfArmsImage = data.coatOfArms.png;
    }
}