import {chain, externalSchematic, Rule, SchematicContext, Tree} from '@angular-devkit/schematics';

export default function (options: any): Rule {
    let updatedOptions: any = {...options, inlineTemplate: true};
    return chain(
        [
            externalSchematic('@schematics/angular', 'component', updatedOptions),
            (tree: Tree, context: SchematicContext) => {
                // Show the options for this Schematics.
                context.logger.info('My Other Schematic: ' + JSON.stringify(options));
                debugger;
                options = {...options, inlineTemplate: true};
                return tree;
            },
        ]
    );
}
