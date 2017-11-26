class App {
    version: string = "1.0.0";

    constructor(version: string) {
        this.version = version;
    }

    getVersion() {
        return "Version: " + this.version + " by Cal Tech Hub.";
    }
}

let app = new App("1.0.0");

let versionEle = document.getElementById('version');
versionEle.textContent = app.getVersion();