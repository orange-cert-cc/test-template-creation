import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'valfilter',
    pure: false
})
export class ValFilterPipe implements PipeTransform {
    transform(items: string[], filter: string): any {
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be kept, false will be filtered out
        return items.filter(item => item.indexOf(filter)==0 );
    }
}

