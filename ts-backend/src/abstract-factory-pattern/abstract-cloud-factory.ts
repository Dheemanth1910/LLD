import { AWSFactory } from "./aws-factory";
import { CloudFactory, CloudProvider } from "./cloud-interface";
import { GCPFactory } from "./gcp-factory";

export class AbstractCloudFactory {
  createFactory(provider: CloudProvider): CloudFactory {
    switch (provider) {
      case "aws":
        return new AWSFactory();
      case "gcp":
        return new GCPFactory();
      default:
        throw new Error(" Trying to create Unknoown CLoud Provider Object");
    }
  }
}
