/**
 * Created by georgius on 07.07.18.
 */
const lorem = [
  'Sed aliquet tempus mauris, ac mollis magna semper sit amet. Nunc nulla dolor, sollicitudin et nisi sed, sagittis mattis arcu. Morbi blandit sagittis enim sed ullamcorper. Nulla molestie commodo neque. Maecenas mollis convallis justo, vel iaculis elit lobortis id. Phasellus mattis rutrum laoreet. Proin id consectetur augue. Nam rhoncus et velit vitae feugiat. Quisque eu orci enim. Aliquam imperdiet tempus ex, vitae gravida arcu lacinia a. Integer sed leo tempus, laoreet tortor at, vehicula libero. Maecenas in fringilla enim. Curabitur risus dolor, ultrices et iaculis sit amet, scelerisque et risus. Integer laoreet turpis vitae urna sodales maximus. Etiam interdum ante ac quam sagittis, ut imperdiet nisi accumsan. Fusce pretium fermentum metus a imperdiet.',
  'Vivamus sed consequat massa, at dignissim orci. Mauris nec augue et quam mollis luctus ut vel orci. Vestibulum eget vestibulum metus, et pharetra nibh. Pellentesque vehicula vulputate lorem, ac tristique tellus vestibulum ac. Nunc sit amet dui vel nulla rhoncus pretium. Aliquam vitae nunc vel dolor vestibulum placerat nec eget felis. Curabitur vel pellentesque nisl, nec rhoncus est. Donec id sem elementum, consectetur nibh nec, dictum purus. Curabitur suscipit rutrum purus. Etiam non ultrices nunc, a ultrices libero. Nulla accumsan efficitur magna ac fringilla. Praesent purus est, pharetra sed lectus mollis, dapibus vestibulum tortor. Praesent fringilla dolor augue, ac dignissim nisi molestie vel. Nullam ac gravida felis. Fusce ut scelerisque sem, et faucibus massa. In hac habitasse platea dictumst.',
  'Curabitur non sapien id urna euismod viverra. Pellentesque gravida consectetur justo, in sodales nisi convallis vel. Proin ac turpis vitae purus faucibus commodo vitae rhoncus tellus. Suspendisse a justo placerat, cursus massa semper, maximus orci. Maecenas ultricies augue quis lectus pretium, ut accumsan mi suscipit. Morbi eget odio elit. Aenean venenatis dui felis, sit amet iaculis enim auctor vel. Vivamus accumsan elit eget enim congue efficitur. Donec quis condimentum tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed tellus ut leo placerat fringilla non a eros. Ut convallis nisl imperdiet sem maximus, id consequat ex convallis. Fusce vehicula dui nec convallis vehicula. Duis pellentesque a ante non mollis. Nunc feugiat nisl vel nulla sagittis, eget aliquam massa hendrerit. Proin in turpis neque.',
  'Proin sollicitudin ultricies mi, quis rutrum neque sollicitudin sit amet. Sed sed suscipit nibh, ultrices tristique risus. Aenean vel rutrum tellus, eu aliquet enim. Nunc felis neque, aliquet vel neque eu, viverra mattis ligula. Nullam tincidunt quam quis mi mollis laoreet ac quis odio. Sed facilisis massa id nisl commodo congue vitae in libero. Sed vitae libero in sem fringilla porttitor sit amet blandit massa. Ut condimentum hendrerit arcu vel porttitor. Nunc semper tellus non ligula porta, et fringilla tellus venenatis. Donec non pharetra quam. Sed lorem elit, suscipit nec auctor ut, gravida nec ex. Morbi ultricies diam non libero sagittis lacinia. Nam ultrices bibendum molestie. Aliquam aliquam, ipsum non cursus vehicula, libero ante fermentum nunc, nec dignissim nibh libero sed urna.',
  'Morbi porttitor varius ante id tristique. Nam interdum libero in enim interdum, vehicula iaculis purus bibendum. Nam feugiat, urna non gravida dictum, nunc magna mattis sem, id molestie orci sem quis nulla. Maecenas eget maximus metus. Cras nec malesuada velit. Suspendisse id leo dapibus, laoreet arcu vel, posuere arcu. Sed mattis metus sit amet ipsum mollis eleifend. Nullam a tristique velit. Praesent gravida est sed ex posuere elementum. Pellentesque suscipit velit eget urna sodales malesuada. Nunc accumsan suscipit lorem at pretium. Sed metus elit, ultrices sit amet tempus sed, vulputate id orci. Nunc maximus tortor ac leo cursus, a fringilla sapien mattis. Proin auctor nisi leo, et dictum ex posuere et. Mauris eu neque eu risus hendrerit facilisis vitae sit amet eros. Aliquam tempus eros quis facilisis fringilla.',
  'In ligula turpis, aliquam sit amet pharetra at, aliquet sed nunc. Suspendisse vel magna felis. Phasellus quis condimentum metus, a vehicula enim. In hac habitasse platea dictumst. Nam congue sem eu elit hendrerit, ut efficitur diam viverra. Proin eget sem ut mi lobortis rutrum. Morbi tempor enim est, non placerat nunc dignissim in. Proin lacus metus, egestas vitae ornare sagittis, pretium at odio. Aliquam sollicitudin, elit imperdiet varius ultricies, arcu tortor mattis eros, eget tincidunt tortor purus eget neque. Nunc in ornare sem. Donec tincidunt tellus mauris, nec rutrum magna posuere at. Praesent consequat, nisl id ultricies tempor, quam leo porttitor ante, id sagittis lectus arcu vel nulla. Etiam vehicula ornare neque in eleifend. Cras sit amet leo sed nibh lacinia dictum eu a ante. Nunc posuere lobortis libero, ac vulputate metus faucibus pulvinar. Nam consequat magna nec iaculis laoreet.',
  'Duis imperdiet porttitor lacus, non euismod nunc consectetur a. Nam laoreet ante nec nisi faucibus, id tristique enim tincidunt. Aenean a est ornare erat iaculis venenatis. Vivamus eget eleifend dui. Nullam tincidunt semper nisl, in luctus lectus commodo nec. Vivamus ornare malesuada velit. Curabitur non faucibus enim. Nulla fermentum mauris dui, a tempor lacus interdum sed. Donec dignissim enim quis mauris dapibus facilisis. Morbi nibh arcu, porta nec arcu sed, posuere lacinia nisl. Curabitur at sodales urna. Curabitur metus elit, ultricies sed ipsum at, ultrices pellentesque nisl. Nunc mollis risus vitae nibh rhoncus, quis vehicula ipsum accumsan. Duis non elementum turpis. Suspendisse suscipit orci sit amet suscipit ullamcorper.',
  'Donec a elit erat. Nunc magna quam, tempor sed tempus id, maximus vel dui. Maecenas sodales nibh velit, at lobortis nisi condimentum sed. Ut euismod viverra arcu. Proin malesuada tempus sem in lobortis. Mauris orci lorem, porttitor sit amet ultricies eu, egestas nec dui. Mauris convallis eros ut cursus vehicula. Ut feugiat luctus dui, ac egestas nibh accumsan tincidunt. Cras consectetur finibus dolor, et ornare dui congue at. Vivamus hendrerit interdum venenatis. Phasellus rhoncus velit vitae augue convallis pharetra. Sed at molestie massa. Aenean vitae posuere velit, et placerat turpis. In leo magna, egestas eu nunc at, elementum dapibus dui. Nullam mauris purus, feugiat quis lorem et, dapibus sollicitudin arcu. Integer sem ipsum, euismod malesuada quam id, pulvinar gravida dolor.',
  'Etiam pellentesque neque sed accumsan blandit. Quisque posuere ex molestie odio maximus, nec commodo diam condimentum. Nunc efficitur velit id enim finibus suscipit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec id mattis sapien. Sed lobortis gravida pellentesque. Cras ut volutpat lacus. Phasellus semper interdum leo, et tincidunt nulla imperdiet vestibulum.',
  'Mauris imperdiet gravida orci eget fringilla. Suspendisse eu erat vitae nibh venenatis placerat et vitae arcu. Integer diam nunc, molestie sit amet magna in, tincidunt faucibus massa. Cras tempus laoreet neque eget venenatis. Ut congue fringilla quam, eu pellentesque dui consequat quis. In semper est eros, at dapibus neque viverra in. Sed ullamcorper, diam ut ultricies gravida, nulla lacus sagittis mauris, at pretium enim arcu tristique tortor. Donec viverra mauris et porta porttitor. Etiam dignissim lacus quis egestas auctor. Etiam vel nunc tellus. Praesent varius ipsum eu ullamcorper blandit. Proin sollicitudin nunc libero, sed ultricies orci hendrerit quis. Suspendisse ut eros nec ipsum finibus efficitur in rutrum elit. Aliquam aliquet molestie leo, at eleifend nisl vehicula vitae. Nulla feugiat, sapien ac eleifend porttitor, metus purus maximus nibh, non mollis felis magna dictum nunc. Aliquam pulvinar leo est, a sodales massa consequat vel.',
  'Cras consequat purus at velit auctor, at sollicitudin leo rhoncus. In eleifend ut ipsum tincidunt bibendum. Maecenas scelerisque ipsum ut mauris sagittis, in fringilla lacus ornare. Quisque ac mattis velit. Integer libero massa, hendrerit sit amet ultrices pharetra, lobortis id turpis. Praesent viverra auctor tempor. Praesent vulputate eros a sem tristique euismod. Nunc lorem tellus, euismod at justo non, dapibus semper nunc. Phasellus egestas ante et viverra ultricies. In ultrices dui condimentum rhoncus scelerisque. Aenean ultricies velit eu egestas scelerisque. Ut a laoreet risus, id hendrerit augue. Nunc pellentesque eget purus et scelerisque.',
  'Nulla vitae hendrerit odio. Curabitur lectus enim, lobortis sit amet tellus sit amet, fringilla cursus nisl. Phasellus rutrum vestibulum felis, sed euismod metus auctor eget. Integer posuere sem nec ipsum ultricies hendrerit. Praesent id vulputate diam. Duis sapien nunc, efficitur eget mi et, consequat dictum nisi. Cras aliquam mattis purus, et lobortis tortor convallis vel. Morbi scelerisque, sapien et convallis vestibulum, sapien leo consectetur quam, vel molestie risus diam non purus. Nulla tempor auctor eros nec vehicula. Cras et dictum justo, ut mattis ante.',
  'Integer finibus luctus lacus, ac iaculis leo cursus sed. Donec ac nibh mi. Ut accumsan, mi vitae feugiat pulvinar, lorem eros cursus tellus, non malesuada turpis nunc nec ligula. Phasellus tincidunt ligula non mauris fringilla iaculis nec tristique massa. Vivamus facilisis mattis suscipit. Nulla facilisi. Pellentesque posuere turpis semper leo tristique, sit amet mattis ipsum iaculis. Nunc in commodo neque. Quisque ac justo id magna scelerisque ultrices eget sit amet odio. Nulla a enim mi. Fusce tristique nisi ut tristique facilisis. Nunc tincidunt risus quis dolor faucibus mollis.',
  'Integer semper, sem nec tempus ullamcorper, odio lacus vehicula leo, at congue massa enim eu quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc ac nulla a felis feugiat pretium non non sem. Sed rutrum rutrum elit lacinia auctor. Vestibulum non accumsan velit. Donec nibh orci, ullamcorper eget tellus quis, varius pretium erat. Fusce varius, augue at tristique congue, odio quam gravida ante, sagittis rutrum orci urna ac ex. Suspendisse neque turpis, auctor in augue ac, ultricies posuere felis. Vivamus in ultricies velit. In hac habitasse platea dictumst. Nullam finibus vulputate mi, vitae pretium nunc imperdiet vitae.',
  'Donec at pharetra dui, ac lacinia risus. Cras convallis risus sed tortor iaculis rhoncus. Quisque lacinia lectus in urna vestibulum, ac ornare neque tincidunt. Vestibulum aliquet risus lacus, eu interdum purus mattis id. Vestibulum accumsan augue quis vestibulum consequat. In sagittis elit tellus, non facilisis odio dapibus ac. Quisque ullamcorper in felis in sagittis. Maecenas sed dolor sit amet quam euismod tincidunt. Duis id turpis sem. Quisque suscipit tellus vitae ante tincidunt, nec pellentesque orci euismod. Aenean erat libero, porttitor non sodales eu, tincidunt vel nisi.'
]

function createParagraph (length) {
  let result = []
  while (result.length < length) {
    result.push(lorem[Math.floor(Math.random() * lorem.length)])
  }
  return '<p>' + result.join('</p>\n<p>') + '</p>'
}

const phrase = [
  'Vita brevis ars longa',
  'Ultra posse nemo obligatur',
  'A capite ad calcem',
  'A potiori fit denominatio',
  'A probis probari, ab improbis improbari aequa laus est',
  'Pictoribus atque poetis',
  'Porta itineri longissima',
  'Quid est veritas?',
  'Invia virtuti nulla est via',
  'Aquĭla non captat muscas',
  'Cetĕrum censeo Carthagĭnem esse delendam',
  'Cujusvis homĭnis est errāre; nullīus, sine insipientis, in irrōre perseverāre',
  'Homo sum: humāni nihil a me aliēnum puto',
  'Parturiunt montes, nascētur ridicŭlus mus',
  'Repetitio est mater studiōrum',
  'Virtūtem primam esse puta compescĕre linguam',
  'Vivĕre est militāre',
  'Trahit sua quemque voluptas',
  'Semper homo bonus tiro est',
  'Tertium non datur'
]

function createPhrase () {
  return phrase[Math.floor(Math.random() * phrase.length)]
}

const words = [
  'Picto',
  'Volens nolens',
  'Urbi et orbi',
  'Ultĭma ratio',
  'Status quo',
  'Vade mecum',
  'Sine irā',
  'Sapienti sat',
  'Quo vadis?',
  'Sub rosā',
  'Aeternitātis',
  'Gloria Mundi',
  'Persōna',
  'Post factum',
  'Post scriptum',
  'Prosit',
  'Panem et Circenses',
  'Qui pro quo',
  'Honōris causā'
]

export function createWord () {
  return words[Math.floor(Math.random() * words.length)]
}

export default {
  createParagraph,
  createPhrase,
  createWord
}
