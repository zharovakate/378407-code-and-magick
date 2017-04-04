/**
 * Created by Ekaterina.Zharova on 29.03.17.
 */
'use strict';

function maxValue(times) {

  var max = -1;
  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }
  return max;
}

window.renderStatistics = function (ctx, names, times) {
  function displayCloud(color, shift) {

    var initialX = 100;
    var initialY = 10;
    ctx.fillStyle = color;

    ctx.strokeRect(initialX + shift, initialY + shift, 420, 270);
    ctx.fillRect(initialX + shift, initialY + shift, 420, 270);

  }


  function displayRect(i) {

    var initialX = 120;
    var width = 50;
    var gap = 40;
    var initialY = 100;
    var histogramHeight = 150;
    var step = histogramHeight / maxValue(times);

    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random() + ')';
    }
    ctx.fillRect(initialX + ((width + gap) * i), initialY + histogramHeight - times[i] * step, width, times[i] * step);
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], initialX + ((width + gap) * i), initialY + histogramHeight + 20);
    ctx.fillText(Math.ceil(times[i]), initialX + ((width + gap) * i), (initialY + histogramHeight - times[i] * step) - 10);

  }
  displayCloud('rgba(0, 0, 0, 0.7)', 10);
  displayCloud('rgba(256, 256, 256, 1.0)', 0);

  ctx.fillStyle = '#000'; // black;
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура, вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  for (var i = 0; i < names.length; i++) {
    displayRect(i, ctx);
  }
};
