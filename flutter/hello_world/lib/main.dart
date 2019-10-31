import 'package:flutter/material.dart';
import 'package:hello_world/pages/home_page.dart';

void main() => runApp(new App());

class App extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new MaterialApp(home: new HomePage());
  }
}
