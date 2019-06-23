import { EventEmitter } from "events";

class AppStore extends EventEmitter {
    constructor() {
        super();
        this.facture = {};
        this.client = {};
        this.ips = {};
    }

    getFacture(){
        return this.facture;
    }

    getClient(){
        return this.client;
    }

    getIps(){
        return this.ips;
    }

    getHandlerFacture() {
        fetch('http://localhost:8080/facture', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(response => response.json())
            .then(json => {
                console.log(json);
                this.facture = json;

                this.emit("facture_receive");
            });
    }

    getHandlerClient() {
        fetch('http://localhost:8080/client', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(response => response.json())
            .then(json => {
                console.log(json);
                this.client = json;

                this.emit("client_receive");
            });
    }

    getHandlerIPs() {
        fetch('http://localhost:8080/ips', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(response => response.json())
            .then(json => {
                console.log(json);
                this.ips = json;

                this.emit("ips_receive");
            });
    }

}

const appStore = new AppStore();

export default appStore;