import { Stack } from "expo-router";

export default function RandomStackLayout() {
  return (
    <Stack>
      <Stack.Screen name="uno" />
      <Stack.Screen name="dos" />
    </Stack>
  );
}
