'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "126a8a51b9d1bbd07fddc65819a542c3",
".git/config": "ef6f45418dcfd934485744d94e154340",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "b8fa5426f79c96e9491eba5609ec95cd",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d384c8f36f0e8e7478f54d5bce35e1c2",
".git/logs/refs/heads/main": "8a1f97c04c850e05fc08110801bcfd62",
".git/logs/refs/remotes/origin/main": "7f095e05a0700c623f82122fdcc575c5",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/11/4a0117d198efcf0452de28e8ac2573fe9f6fbb": "910e8f22d62ef080be93ee167356a5e8",
".git/objects/1d/c9f20b286956cfb590ed03efd55321f249f15c": "8fdd5b42994a14dd5e05b4691af72b2a",
".git/objects/1e/e925bd483333dbbed3d26e3a3e10da762d841a": "198749f79809eaf067e587eacb424f18",
".git/objects/24/09406c772961c9c7a8d6f6ae54e69208e30f21": "f6af0127ae285af7d6a726d1f387e70e",
".git/objects/2a/849281c8503bc76fb28a9b8c58426b2be080d4": "fe63c0e3920d7b05c88715b827064a5e",
".git/objects/2b/16c3a374c9faff6524391c8c114d3e3dcb0864": "c081cb6dd4ad3d2578b57686ff1adeb7",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/3c/90155f58a74e05586039bf0a974078c2491221": "94fe798fc0ad66ed63748817edebeae5",
".git/objects/42/50d4f5252d2b26e0d010b8d399c537d7271399": "d314f5f04dcb4aaeed7ad47d5d2cac5d",
".git/objects/45/cbd5e431ae17399170c9bc90ec99dd04f7dd4e": "76ff608199f9268a356f2e39d2dae729",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/dda9be6fe70e2200174782e922df77dc5a5c5e": "a63b965f6ce77da7307a0d87563ee7f2",
".git/objects/4f/149690fc69644bd63692e7fdce35c2872181cd": "f1047d38c0a7156328c2eb3007c2591f",
".git/objects/50/bf7232ed7aad6f2da88232908971409f9e93b6": "9dec7bdd5983593c8c9a166be8bd2a9f",
".git/objects/55/d5b8738b941fa8237be32fa1ae4c09f4c69b5d": "3b6666f77a2f69d3c97bd39f8e57178c",
".git/objects/58/ee08bedb3d6ca08f99bb7e3f0de47a5c4bda32": "c9fbb9b5409bd03e52fb28926d26c250",
".git/objects/5a/13c6ab63c6a957b8bd5b3cc2e63c9be7554290": "8de0191856be87ef45f367a56f09f580",
".git/objects/5e/1434aeb55da45d44f83ab656b756bf3bbc840c": "392cdfe54f3b010759e205392b2f0056",
".git/objects/68/7774992c06c1703526dd49cea520fd69c02019": "a593a36142977021002d877be3283ba3",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/71185ea86cd61fad80939c1b9e0240bec15217": "893ed8e27672ae5ea6bc74e17e3e72d1",
".git/objects/7c/c9bfa763334f7a6de83868cdd31a2220281510": "af77ca639c463c327cfeca11b438ed83",
".git/objects/82/9f12f0aedd5e56a6951094462b9c9ef0d4a186": "de6656ec4b2c46dcb259d349f25f86b7",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/ad0d2f0d664b539f0b541ccfaf651479723b43": "d2a56fd1a8d1c7b8d3f32d5061087022",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/9a/f7c05c49fc579cb5e335109c8884d329329353": "50063e8ded4e09905c8bf86fdafac0fa",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/9c/bebd7bff83f1fa56ebe926c7bdfffc2941cd88": "6f0f79e8cddf4d9cad9d0edafc70d710",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/039809ea9d595279f719cd90a53616a5c6280b": "f458dedeaef671dca9941e7f5146c287",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/ae/d6acd25341128448829387fe133944821ff120": "14aee739ca30ace71b978b312a0f1743",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/89c8854afb32bb2da96069aa84fa4ae877d174": "51d0925d8be5ab470f9af9c86b1d7a26",
".git/objects/c1/41ed63c324632e684b66e42ce2da9643ddd657": "d721b652b87b6e55d79d183aa0739378",
".git/objects/d0/62511b7bcec4a2931dc96997647f0ba11188d2": "c1397c5b86c9099de859ac26917783ae",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/02e506026019b29d8eaad446ab036b48217fab": "9c318ac767aa010444dcb5aa57abd64f",
".git/objects/d7/0cd5f58dd23d03391b7d91f0c4926d2b0c003c": "22a0ddedfa6f53448e1d5b0cc057b464",
".git/objects/da/e0261ad6a1d8d89b93e8ae287c746e815b8aa9": "e7567fd11f61f6f320605d84bf4855a0",
".git/objects/db/77310bf1b0a5b028f07de9ad22bbbd2104c51b": "ad067a73c708101b2cc6dafa2ed2e8dd",
".git/objects/df/144ae0db083d7532aeb2ee236a37809c6eb430": "687848419945336d197a2c4d682530fe",
".git/objects/e0/dda30388c680ed4529b74b802788238c317511": "42134f67836543bf18afe1f53ed8240c",
".git/objects/e1/bad5e2f11033c65845aaf6c1614958eb19f580": "8de81e6aa5812fdb32fab5d5a51c2844",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/3548321958148cbe4e2e73041ccaba11c97f67": "9d41e6e1a29e1012155cfb3afe980c8a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f5/2696eb1649b8df8970d5580327c88527c44c1a": "c3dba842ca27e03bf2f6df9074171616",
".git/objects/fd/48d881db980bbf8a04479baab61c192c0b0d72": "565d3534be47944c079d193e19b14dac",
".git/refs/heads/main": "8b8b97b763e7efa0699e08dd08567874",
".git/refs/remotes/origin/main": "8b8b97b763e7efa0699e08dd08567874",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "4cf4505dee6ad3e6e5d6848049440895",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0c5b8351fffe895891ca4cba4b8263e6",
"/": "0c5b8351fffe895891ca4cba4b8263e6",
"main.dart.js": "0589cb1d8852d991ea87b641bda2bac3",
"manifest.json": "67a1f1bd9538b24fc6d65b986470c9fd",
"version.json": "aab0fd0fcb34134ff0693d65f93d4144"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
