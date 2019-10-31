import 'package:flutter/material.dart';

class TabbarPage extends StatelessWidget {
  static const String routeName = "/tabbar";

  @override
  Widget build(BuildContext context) {
    var _tabbarBloc = new TabbarBloc();
    return new Scaffold(
      appBar: new AppBar(
        title: new Text("Tabbar"),
      ),
      body: new TabbarScreen(tabbarBloc: _tabbarBloc),
    );
  }
}

class Tab {
  Tab({this.title, this.icon, this.image});
  final String title;
  final Icon icon;
  final String image;
}

class TabContent extends StatelessWidget {
  const TabContent({Key key}) : super(key: key);
  final Tab tab˜;

  @override
  Widget build(BuildContext context) {
    return Container(
      child: child,
    );
  }
}
