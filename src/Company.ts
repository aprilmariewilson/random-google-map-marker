import faker from 'faker';
import { Mappable } from './CustomMap';

//implement interface to point errors to actual error
export class Company implements Mappable {
  companyName: string;
  catchphrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchphrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }
  markerContent(): string {
    return `
    <div>
    <h3>${this.companyName}</h3>
    <p>${this.catchphrase}</p>
    </div>
    `;
  }
}
