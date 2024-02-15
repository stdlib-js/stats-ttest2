<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Student's t-Test

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Two-sample Student's t-Test.



<section class="usage">

## Usage

```javascript
import ttest2 from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-ttest2@esm/index.mjs';
```

#### ttest2( x, y\[, opts] )

By default, the function performs a two-sample t-test for the null hypothesis that the data in [arrays][mdn-array] or [typed arrays][mdn-typed-array] `x` and `y` is  independently drawn from normal distributions with _equal_ means.

```javascript
// Student's sleep data:
var x = [ 0.7, -1.6, -0.2, -1.2, -0.1, 3.4, 3.7, 0.8, 0.0, 2.0 ];
var y = [ 1.9, 0.8, 1.1, 0.1, -0.1, 4.4, 5.5, 1.6, 4.6, 3.4 ];

var out = ttest2( x, y );
/* e.g., returns
    {
        'rejected': false,
        'pValue': ~0.079,
        'statistic': ~-1.861,
        'ci': [ ~-3.365, ~0.205 ],
        // ...
    }
*/
```

The returned object comes with a `.print()` method which when invoked will print a formatted output of the results of the hypothesis test. `print` accepts a `digits` option that controls the number of decimal digits displayed for the outputs and a `decision` option, which when set to `false` will hide the test decision.

<!-- run-disable -->

```javascript
console.log( out.print() );
/* e.g., =>
    Welch two-sample t-test

    Alternative hypothesis: True difference in means is not equal to 0

        pValue: 0.0794
        statistic: -1.8608
        95% confidence interval: [-3.3655,0.2055]

    Test Decision: Fail to reject null in favor of alternative at 5% significance level
*/
```

The function accepts the following `options`:

-   **alpha**: `number` in the interval `[0,1]` giving the significance level of the hypothesis test. Default: `0.05`.
-   **alternative**: Either `two-sided`, `less` or `greater`. Indicates whether the alternative hypothesis is that `x` has a larger mean than `y` (`greater`), `x` has a smaller mean than `y` (`less`) or the means are the same (`two-sided`). Default: `two-sided`.
-   **difference**: `number` denoting the difference in means under the null hypothesis. Default: `0`.
-   **variance**: `string` indicating if the test should be conducted under the assumption that the unknown variances of the normal distributions are `equal` or `unequal`. Default: `unequal`.

By default, the hypothesis test is carried out at a significance level of `0.05`. To choose a different significance level, set the `alpha` option.

```javascript
var x = [ 0.7, -1.6, -0.2, -1.2, -0.1, 3.4, 3.7, 0.8, 0.0, 2.0 ];
var y = [ 1.9, 0.8, 1.1, 0.1, -0.1, 4.4, 5.5, 1.6, 4.6, 3.4 ];

var out = ttest2( x, y, {
    'alpha': 0.1
});
var table = out.print();
/* e.g., returns
    Welch two-sample t-test

    Alternative hypothesis: True difference in means is not equal to 0

        pValue: 0.0794
        statistic: -1.8608
        90% confidence interval: [-3.0534,-0.1066]

    Test Decision: Reject null in favor of alternative at 10% significance level
*/
```

By default, a two-sided test is performed. To perform either of the one-sided tests, set the `alternative` option to `less` or `greater`.

```javascript
// Student's sleep data:
var x = [ 0.7, -1.6, -0.2, -1.2, -0.1, 3.4, 3.7, 0.8, 0.0, 2.0 ];
var y = [ 1.9, 0.8, 1.1, 0.1, -0.1, 4.4, 5.5, 1.6, 4.6, 3.4 ];

var out = ttest2( x, y, {
    'alternative': 'less'
});
var table = out.print();
/* e.g., returns
    Welch two-sample t-test

    Alternative hypothesis: True difference in means is less than 0

        pValue: 0.0397
        statistic: -1.8608
        df: 17.7765
        95% confidence interval: [-Infinity,-0.1066]

    Test Decision: Reject null in favor of alternative at 5% significance level
*/

out = ttest2( x, y, {
    'alternative': 'greater'
});
table = out.print();
/* e.g., returns
    Welch two-sample t-test

    Alternative hypothesis: True difference in means is greater than 0

        pValue: 0.9603
        statistic: -1.8608
        df: 17.7765
        95% confidence interval: [-3.0534,Infinity]

    Test Decision: Fail to reject null in favor of alternative at 5% significance level
*/
```

As a default choice, the `ttest2` function carries out the Welch test (using the Satterthwaite approximation for the degrees of freedom), which does not have the requirement that the variances of the underlying distributions are equal. If the equal variances assumption seems warranted, set the `variance` option to `equal`.

```javascript
var x = [ 2, 3, 1, 4 ];
var y = [ 1, 2, 3, 1, 2, 5, 3, 4 ];

var out = ttest2( x, y, {
    'variance': 'equal'
});
var table = out.print();
/* e.g., returns
    Two-sample t-test

    Alternative hypothesis: True difference in means is not equal to 0

        pValue: 0.8848
        statistic: -0.1486
        df: 10
        95% confidence interval: [-1.9996,1.7496]

    Test Decision: Fail to reject null in favor of alternative at 5% significance level
*/
```

To test whether the difference in the population means is equal to some other value than `0`, set the `difference` option.

```javascript
var normal = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-normal' ).factory;

var rnorm = normal({
    'seed': 372
});

var x = [];
var i;
for ( i = 0; i < x.length; i++ ) {
    x.push( rnorm( 2.0, 3.0 ) );
}

var y = [];
for ( i = 0; i < x.length; i++ ) {
    y.push( rnorm( 1.0, 3.0 ) );
}

var out = ttest2( x, y, {
    'difference': 1.0,
    'variance': 'equal'
});
/* e.g., returns
    {
        'rejected': false,
        'pValue': ~0.642,
        'statistic': ~-0.466,
        'ci': [ ~-0.0455, ~1.646 ],
        // ...
    }
*/

var table = out.print();
/* e.g., returns
    Two-sample t-test

    Alternative hypothesis: True difference in means is not equal to 1

        pValue: 0.6419
        statistic: -0.4657
        df: 198
        95% confidence interval: [-0.0455,1.646]

    Test Decision: Fail to reject null in favor of alternative at 5% significance level
*/
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import incrspace from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-incrspace@esm/index.mjs';
import ttest2 from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-ttest2@esm/index.mjs';

var a = incrspace( 1, 11, 1 );
var b = incrspace( 7, 21, 1 );

var out = ttest2( a, b );
var table = out.print();
/* e.g., returns
    Welch two-sample t-test

    Alternative hypothesis: True difference in means is not equal to 0

        pValue: 0
        statistic: -5.4349
        95% confidence interval: [-11.0528,-4.9472]

    Test Decision: Reject null in favor of alternative at 5% significance level
*/

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats-ttest`][@stdlib/stats/ttest]</span><span class="delimiter">: </span><span class="description">one-sample and paired Student's t-Test.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-ttest2.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-ttest2

[test-image]: https://github.com/stdlib-js/stats-ttest2/actions/workflows/test.yml/badge.svg?branch=v0.2.0
[test-url]: https://github.com/stdlib-js/stats-ttest2/actions/workflows/test.yml?query=branch:v0.2.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-ttest2/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-ttest2?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-ttest2.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-ttest2/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-ttest2/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-ttest2/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-ttest2/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-ttest2/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-ttest2/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-ttest2/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-ttest2/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-ttest2/main/LICENSE

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays

<!-- <related-links> -->

[@stdlib/stats/ttest]: https://github.com/stdlib-js/stats-ttest/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
