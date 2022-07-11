# stats.js

stats.js is a JavaScript script for displaying statistics from [vAMSYS](https://vamsys.co.uk) customers' virtual airlines on the customer's own website. The script is currently a work-in-progress,
and no stable release is available yet.

## Usage

stats.js is hosted on the vAMSYS CDN at https://vamsys.fra1.cdn.digitaloceanspaces.com/statsjs/bundle.js

To use stats.js, at the bottom of your HTML file, include the `bundle.js` script, and then below that you can specify what to replace.

You will need your VA's UUID, which is the key at the end of your Statistics URL from Orwell. An example UUID is `44af8377-34f9-401a-aafe-5cfbc2cf8325`.

```html
<span id="total-pireps-stat"></span>
<script src="https://vamsys.fra1.cdn.digitaloceanspaces.com/statsjs/bundle.js"></script>
<script>
  var stats = vamsysStats({
    uuid: "[YOUR_VA_UUID]"
  });

  stats.replace("total-pireps-stat").withVaStat(stats => stats.pireps.total);
</script>
```

The example above replaces the inner HTML of the element with the id `total-pireps-stat` with the total PIREPs statistic.

A full list of what statistics can be included can be found in the [statistics.ts](/src/types/statistics.ts) file. A full list of options that can be passed to the `vamsysStats` function can be
found in the [settings.ts](/src/types/settings.ts) file.

## Security

If you find a security issue with the script, please email `george [a t] vamsys.io`. You can encrypt your message using his key, available [here](https://www.southampton.ac.uk/~gjp1g21/key.asc).