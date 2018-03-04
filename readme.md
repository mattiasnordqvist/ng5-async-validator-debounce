# ng5-async-debounce

based on https://gist.github.com/Humberd/b033c2c4df3ac0eae9b466038a433635

`import { debounce } from 'ng5-async-debounce';`

```
new FormControl('', {
        validators: Validators.required,
        asyncValidators: debounce(this.myValidator(), 500 /* debouncetime. default is 1000 ms */),
      }),
```