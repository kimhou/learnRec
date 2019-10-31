import 'package:flutter/material.dart';
import 'package:english_words/english_words.dart';

class RandomWord extends StatefulWidget {
  final TextStyle style = TextStyle(color: Colors.blue);
  RandomWord({Key key}) : super(key: key);

  _RandomWordState createState() => _RandomWordState();
}

class _RandomWordState extends State<RandomWord> {
  @override
  Widget build(BuildContext context) {
    final word = new WordPair.random();
    return Container(
       child: new Text(word.asPascalCase, style: widget.style,),
    );
  }
}