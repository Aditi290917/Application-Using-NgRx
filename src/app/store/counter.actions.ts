import { Action, createAction, props } from "@ngrx/store";

export const init= createAction(
    '[Count] Init'
);
export const set = createAction(
    '[Counter] Set',
    props<{value:number}>(),

);
export const increment = createAction(
   '[Counter] Increment',
    props<{value: number}>()
);

export const decrement = createAction(
    '[Counter] Decrement',
    props<{value: number}>()
);
//export const Increment ='[Counter] Increment'
//export class IncrementAction implements Action {
  //  readonly type = Increment;

   // constructor(public value: number){}
//}

//export type CounterAction = IncrementAction;