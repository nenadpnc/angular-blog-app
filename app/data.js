var Data = (function(){
    // data
    var articles = [
        {
            id: 1,
            imgSrc: 'img/img11-1.jpg',
            title: 'Etiam Nullam Inceptos Vulputate Quam',
            txtPreview: 'Aenean lacinia bibendum nulla sed consectetur. Maecenas faucibus mollis interdum. Cras justo odio, dapibus ac facilisis…',
            tags: ['photo', 'music'],
            date: 'Jun, 28, 2014',
            htmlTxt: '<p></p><p>Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p><p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vestibulum id ligula porta felis euismod semper. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>'
        },
        {
            id: 2,
            imgSrc: 'img/p8.JPG',
            title: 'Ligula Tortor Inceptos',
            txtPreview: 'Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.…',
            tags: ['photo', 'trip'],
            date: 'Jun, 25, 2014',
            htmlTxt: '<p></p><p>Donec ullamcorper nulla non metus auctor fringilla. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p><p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vestibulum id ligula porta felis euismod semper. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>'
        },
        {
            id: 3,
            imgSrc: 'img/p7.jpg',
            title: 'Pellentesque Consectetur Lorem Tellus Pharetra',
            txtPreview: 'Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec ullamcorper nulla non metus auc…',
            tags: ['trip'],
            date: 'Jun, 30, 2014',
            htmlTxt: '<p></p><p>Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec ullamcorper nulla non metus auctor fringilla. Curabitur blandit tempus porttitor.</p><p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Curabitur blandit tempus porttitor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p><p>Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, a pharetra augue. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>'
        },
        {
            id: 4,
            imgSrc: 'img/img12-1.jpg',
            title: 'Mattis Egestas',
            txtPreview: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec id elit n…',
            tags: ['photo', 'trip'],
            date: 'Jun, 24, 2014',
            htmlTxt: '<p></p><p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Donec id elit non mi porta gravida at eget metus. Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p><p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean lacinia bibendum nulla sed consectetur.</p>'
        },
        {
            id: 5,
            imgSrc: 'img/p5.jpg',
            title: 'Adipiscing Consectetur Risus',
            txtPreview: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl conse…',
            tags: ['photo', 'trip'],
            date: 'Jun, 25, 2014',
            htmlTxt: '<p></p><p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p><p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla. Donec ullamcorper nulla non metus auctor fringilla. Donec sed odio dui. Maecenas faucibus mollis interdum. Maecenas faucibus mollis interdum.</p><p>Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Sed posuere consectetur est at lobortis.</p>'
        },
        {
            id: 6,
            imgSrc: 'img/p4.jpg',
            title: 'Mollis Ipsum Bibendum Vehiculas',
            txtPreview: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nullam quis risus eget urna mollis ornare vel eu l…',
            tags: ['photo', 'nature'],
            date: 'Jun, 25, 2014',
            htmlTxt: '<p></p><p>Maecenas sed diam eget risus varius blandit sit amet non magna. Nulla vitae elit libero, a pharetra augue. Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p><p>Nullam id dolor id nibh ultricies vehicula ut id elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>'
        },
        {
            id: 7,
            imgSrc: 'img/p3.jpg',
            title: 'Porta Lorem',
            txtPreview: 'Maecenas sed diam eget risus varius blandit sit amet non magna. Nulla vitae elit libero, a pharetra augue. Nullam quis …',
            tags: ['photo', 'trip'],
            date: 'Jun, 25, 2014',
            htmlTxt: '<p></p><p>Maecenas sed diam eget risus varius blandit sit amet non magna. Nulla vitae elit libero, a pharetra augue. Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p><p>Nullam id dolor id nibh ultricies vehicula ut id elit. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>'
        },
        {
            id: 8,
            imgSrc: 'img/img13-1.jpg',
            title: 'Sollicitudin Ridiculus Tellus',
            txtPreview: 'Cras mattis consectetur purus sit amet fermentum. Nulla vitae elit libero, a pharetra augue. Nulla vitae elit libero, a…',
            tags: ['photo'],
            date: 'Jun, 25, 2014',
            htmlTxt: '<p></p><p>Cras mattis consectetur purus sit amet fermentum. Nulla vitae elit libero, a pharetra augue. Nulla vitae elit libero, a pharetra augue. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum.</p><blockquote><p>Vestibulum id ligula porta felis euismod semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor.</p></blockquote>'
        }
    ];
    
    var tags = [
        {
            id: 1,
            title: 'photo'
        },
        {
            id: 2,
            title: 'music'
        },
        {
            id: 3,
            title: 'trip'
        },
        {
            id: 4,
            title: 'nature'
        }
    ];
    
    var images = [
        {
            id: 1,
            src: 'img/img12-1.jpg'
        },
        {
            id: 2,
            src: 'img/img13-1.jpg'
        },
        {
            id: 3,
            src: 'img/p4.jpg'
        },
        {
            id: 4,
            src: 'img/p5.jpg'
        },
        {
            id: 5,
            src: 'img/p7.jpg'
        },
        {
            id: 6,
            src: 'img/p8.JPG'
        },
        {
            id: 7,
            src: 'img/img11-1.jpg'
        },
        {
            id: 8,
            src: 'img/p3.jpg'
        }
        
    ];
    
    function init(){
        var articlesStorage = localStorage.getItem('articles');
        if(!articlesStorage){
            localStorage.setItem('articles', JSON.stringify(articles));
        }
        else{
            articles = JSON.parse(articlesStorage);
        }
    };
    
    function getArticles(){
        return articles;
    };
    
    function getArticleById(id){
        for(var i = 0; i < articles.length; i++){
            if(articles[i].id === id) return articles[i];
        }
    };
    
    function setArticle(article){
        for(var i = 0; i < articles.length; i++){
           if(articles[i].id == article.id){
               articles[i].imgSrc = article.imgSrc;
               articles[i].title = article.title;
               articles[i].tags = article.tags;
               articles[i].date = article.date;
               articles[i].htmlTxt = article.htmlTxt;
               articles[i].txtPreview = article.txtPreview;
               break;
           }
        }
        localStorage.setItem('articles', JSON.stringify(articles));
    };
    
    function createArticle(article){
        article['id'] = articles.length + 1;
        articles.push(article);
        localStorage.setItem('articles', JSON.stringify(articles));
    };
    
    function deleteArticle(article){
        for(var i = 0; i < articles.length; i++){
           if(articles[i].id == article.id){
               articles.remove(i);
               break;
           }
        }
        localStorage.setItem('articles', JSON.stringify(articles));
    }
    
    Array.prototype.remove = function(from, to) {
      var rest = this.slice((to || from) + 1 || this.length);
      this.length = from < 0 ? this.length + from : from;
      return this.push.apply(this, rest);
    };
    
    return {
        getArticles: getArticles,
        tags: tags,
        images: images,
        init: init,
        getArticleById: getArticleById,
        setArticle: setArticle,
        createArticle: createArticle,
        deleteArticle: deleteArticle
    }
})();