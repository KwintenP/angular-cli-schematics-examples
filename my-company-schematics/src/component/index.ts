import {externalSchematic, Rule } from '@angular-devkit/schematics';

export default function (options: any): Rule {
    return externalSchematic('@schematics/angular', 'component', options);
}
