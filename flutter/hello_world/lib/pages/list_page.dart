import 'package:flutter/material.dart';
import 'package:english_words/english_words.dart';

class ListPage extends StatefulWidget {
  ListPage({Key key}) : super(key: key);

  _ListPageState createState() => _ListPageState();
}

class _ListPageState extends State<ListPage> {
  final _list = <WordPair>[];
  final _favoriteList = new Set<String>();
  final _style = TextStyle(color: Colors.green, fontSize: 17);

  @override
  Widget build(BuildContext context) {
    return Container(
      child: new ListView.builder(
        padding: new EdgeInsets.all(16.0),
        itemBuilder: (context, i) {
          if (i.isOdd) return new Divider();
          final index = i ~/ 2;
          if (index >= _list.length) {
            _list.addAll(generateWordPairs().take(10));
          }
          return _renderRow(_list[index].asPascalCase);
        },
      ),
    );
  }

  _renderRow(text) {
    return new ListTile(
      title: new Text(text, style: _style),
      trailing: new Icon(
        Icons.favorite,
        color: _favoriteList.contains(text)? Colors.red : Colors.grey
      ),
      onTap: (){
        setState((){
        if(_favoriteList.contains(text)){
          _favoriteList.remove(text);
        }else{
          _favoriteList.add(text);
        }
      });
      },
    );
  }
}
