

class Permutations:
    def are_permutations(self, s1, s2):
        
        i = 0
        ar1 = s1.split() #split up the strings
        ar2 = s2.split()

        while i < len(ar1): #go through each component
          
           if sorted(ar1[i]) == sorted(ar2[i]): #sort the components alphabetically
            return True #if the same true
           else: #if not the same false
            return False
           
        
 
p = Permutations()
s1 = 'abc'
s2 = 'cab'
print(p.are_permutations(s1, s2))

 