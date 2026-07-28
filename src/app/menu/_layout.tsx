import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function MenuLayout() {
  return (
    <Tabs screenOptions={{ headerShown:false }}>

      <Tabs.Screen
        name="home"
        options={{
          title:"Home",
          tabBarIcon:({color,size})=>(
            <Ionicons name="home" size={size} color={color}/>
          )
        }}
      />

      <Tabs.Screen
        name="espana"
        options={{
          title:"España",
          tabBarIcon:({color,size})=>(
            <Ionicons name="football" size={size} color={color}/>
          )
        }}
      />

      <Tabs.Screen
        name="acerca"
        options={{
          title:"Acerca",
          tabBarIcon:({color,size})=>(
            <Ionicons name="person" size={size} color={color}/>
          )
        }}
      />

    </Tabs>
  );
}