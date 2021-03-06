/////////////////////////////////////////////////////////////////////////////////////
// All code specific to the MaestrosGames.com website Index/Home Page ////////////
/////////////////////////////////////////////////////////////////////////////////////

var commanders = {
  tinkermeister: {
    title: 'Tinkermeister',
    name: 'Gregory',
    faction: 'Teutonian',
    img: 'https://i.imgur.com/1dnTZXl.png',
    description: ['The only melee commander of the Teutonian army, this soldier is hard to take down. With his high health and good damage, the Tinkermeister is likely to charge right into the fray with his army close behind. With his ability creating a bubble to freeze all enemy units in a time lock, his foes need to be ready for a quick getaway if he gets too close.']
  },
  robomeister: {
    title: 'Robomeister',
    name: 'Alexander',
    faction: 'Teutonian',
    img: 'https://i.imgur.com/dgKMGKs.png',
    description: ['The Robomeister is an excellent commander at taking on groups of enemies, but falls short in single combat. His basic attack, while not as strong as other commanders, deals splash damage that hurts all surrounding foes. His ability is one not to be messed with, as he fires a rocket with infinite range that deals massive area of effect damage on impact, and provides quite a fireworks display!']
  },
  blastmeister: {
    title: 'Blastmeister',
    name: 'Rosie',
    faction: 'Teutonian',
    img: 'https://i.imgur.com/eY6O1ng.png',
    description: ['This agile commander is both deadly and fragile. With her high attack damage, she can tear apart single units, but needs to keep her distance as she can fall faster than any other commander. Her ability, Blast Cannon, not only pushes enemies away, but her as well, giving her an edge in both keeping her distance, as well as pursuing enemies.']
  },
  serpentMaster: {
    title: 'Serpent Master',
    name: 'Salvator',
    faction: 'Regalis',
    img: 'https://i.imgur.com/BN5Ho58.png',
    description: [
      'This serpentine commander is both a sneaky assassin and expert escape artist. With a ranged attack that allows him to keep a bit of distance between him and his foes, the Serpent Master can quickly jump in and out of combat with his versatile Vortal ability. By creating a two-way portal at a target location within range, the Serpent Master (and all his allies) can quickly engage his enemies, or escape if they are losing the battle.'
    ]
  },
  hiveMother: {
    title: 'Hive Mother',
    name: 'Jean',
    faction: 'Regalis',
    img: 'https://i.imgur.com/D3pgcbM.png',
    description: [
      'Like the swarms of deadly hornets that grant her her namesake, the Hive Mother is an aggressive commander that prefers to dive into the frontlines and face her foes head on. While more fragile than most close range units, the Hive Mother strikes with a power and precise strike that tops those of any of her minions. The Hive Mother can temporarily burst into a swarm of powerful hornets as well, heavily damaging all foes she comes in contact with, and allowing her to travel through all friends and foes.'
    ]
  },
  rambamQueen: {
    title: 'Rambam Queen',
    name: '',
    faction: 'Regalis',
    img: 'https://i.imgur.com/Okh1P9B.png',
    description: [
      'Don’t let her cute demeanor trick you, as the Rambam queen is a force to be reckoned with. Preferring to stay in the rear of her engagement, the Rambam Queen lets her minions do the work for her. And she has a trick up her sleeve, as she can summon three of her loyal, more powerful, rambam subjects to further bolster her army. She needs to act quickly though, as these powerful servants will only remain on the field for a short time.'
    ]
  }
}

function prepareCommander() {
  $('.commander-icon').on('click', function(e) {
    var target = $(e.target)[0].attributes['data-commander'].value;
    var commander = commanders[target];
    showCommander(commander);
  });
  $('.commander-big').hide();
}

function showCommander(commander) {
    $('.section-bottom').delay(1).hide();
    if ($('.commander-big').length) {
      $('.commander-big').fadeOut(300);
      $('.commander-type-txt').fadeOut(300);
      $('.commander-name-txt').fadeOut(300);
      $('.commander-description-txt').fadeOut(300);
      $('.commander-big').remove();
      $('.commander-type-txt').remove();
      $('.commander-name-txt').remove();
      $('.commander-description-txt').remove();
    } else {
      delete $('.commander-big');
    }
    $('.commanders').append("<div class='commander-type-txt'><h1 class='subsection-header commander col-md-offset-6 col-xs-offset-3'>"+commander.title+"</h1></div>");
    $('.commander-type-txt').animate({'left':'+=10px', 'display':'show', 'opacity':'1'}, 1500);
    $('.commanders').append("<div class='commander-name-txt'><h4 class='subsection-header commander col-md-offset-6 col-xs-offset-3'>"+commander.name+"</h4></div>");
    $('.commander-name-txt').delay(200).animate({'left':'+=10px', 'display':'show', 'opacity':'1'}, 1500);
    $('.commanders').append("<img src='" + commander.img + "'' class='commander-big col-md-offset-2 col-xs-offset-4'></img>");

    var commanderDescription = '';
    for (var i = 0; i < commander.description.length; i++) {
      commanderDescription += "<p class='commander-description'>" + commander.description[i] + "</p>";
    }

    $('.commanders').append("<div class='commander-description-txt col-md-offset-1'>" + commanderDescription + "</div>");
    $('.commander-description-txt').delay(200).animate({'left':'+=10px', 'display':'show', 'opacity':'1'}, 1500);
    $('.commander-big').hide().fadeIn(1500);
    $('.commande')
    return false;
}

function showCommanderOnLoad() {
  var randint = Math.floor(Math.random() * (Object.keys(commanders).length - 1));
  console.log(randint);
  var commander = Object.keys(commanders)[randint];
  showCommander(commanders[commander]);
}

 $(document).ready( function() {
   prepareCommander();
 });

 $(document).ready(function() {
  showCommanderOnLoad();
 });

 function muteVimeo() {
    var vimeo_iframe = $('#vimeo_player')[0];
    var player = $f(vimeo_iframe);
    player.addEvent('ready', function() {
        player.api('setVolume', 0);
    });
}

$(document).ready(function() {
  muteVimeo();
});