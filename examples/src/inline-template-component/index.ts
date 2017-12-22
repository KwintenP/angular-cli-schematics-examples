import {externalSchematic, Rule} from '@angular-devkit/schematics';

export default function (options: any): Rule {
    let updatedOptions: any = {...options, inlineTemplate: true};
    return externalSchematic('@schematics/angular', 'component', updatedOptions)
}
