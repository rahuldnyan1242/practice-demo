import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mypipe'
})
export class MyPipe implements PipeTransform {
    transform(value: any, limit: number) {
        // console.log(value);

        if(value.length > limit){
            return value.substring(0, limit) + ' ...';
        } else {
            return value
        }
        
        // return value;
    }

}