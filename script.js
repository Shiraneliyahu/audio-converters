const SPEED_OF_SOUND = 343; // meters per second

function msToMeters() {
  const ms = parseFloat(document.getElementById("msInput").value);
  if (isNaN(ms)) return;

  const meters = (ms / 1000) * SPEED_OF_SOUND;
  document.getElementById("msMetersResult").innerText =
    `${ms} ms = ${meters.toFixed(3)} meters`;
}

function metersToMs() {
  const meters = parseFloat(document.getElementById("metersInput").value);
  if (isNaN(meters)) return;

  const ms = (meters / SPEED_OF_SOUND) * 1000;
  document.getElementById("msMetersResult").innerText =
    `${meters} meters = ${ms.toFixed(3)} ms`;
}

function dbToRatio() {
  const db = parseFloat(document.getElementById("dbInput").value);
  if (isNaN(db)) return;

  const ratio = Math.pow(10, db / 20);
  document.getElementById("dbResult").innerText =
    `${db} dB = יחס של ×${ratio.toFixed(4)}`;
}

function hzToWavelength() {
  const hz = parseFloat(document.getElementById("hzInput").value);
  if (isNaN(hz) || hz <= 0) return;

  const wavelength = SPEED_OF_SOUND / hz;
  document.getElementById("hzResult").innerText =
    `${hz} Hz = אורך גל של ${wavelength.toFixed(3)} מטר`;
}
