class DiceRoller:
    def roll_dice(self, sides: int, count: int):
        import random
        results = [random.randint(1, sides) for _ in range(count)]
        return results