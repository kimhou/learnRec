import 'package:flutter/material.dart';
import 'package:hello_world/pages/list_page.dart';

final List<Router> routers = <Router>[
  Router(
      title: 'ListView',
      builder: () {
        return new ListPage();
      })
];

class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new Scaffold(
        appBar: new AppBar(
          title: new Text(
            'DEMO LIST',
            style: TextStyle(color: Colors.white),
          ),
        ),
        body: Container(
            child: Center(
          child: Column(
              children: routers.map((Router route) {
            return RaisedButton(
              child: Text(route.title),
              onPressed: () {
                _navigateToTargetPage(context, route.builder);
              },
            );
          }).toList()),
        )));
  }

  _navigateToTargetPage(context, builder) {
    Navigator.push(context, MaterialPageRoute(builder: (context) {
      return new Scaffold(
          appBar: new AppBar(
            title: new Text('List View'),
          ),
          body: builder());
    }));
  }
}

class Router {
  const Router({this.title, this.builder});
  final String title;
  final Function builder;
}
