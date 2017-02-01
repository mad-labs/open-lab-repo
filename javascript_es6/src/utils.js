function myFind(args, predicate){
  if (args && args[0]) {
    return predicate(arg[0]) ? args[0] : myFind(args.split(1), predicate);
  }
  return undefined;
}
