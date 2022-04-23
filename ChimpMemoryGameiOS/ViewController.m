//
//  ViewController.m
//  ChimpMemoryGameiOS
//
//  Created by Christopher Francisco on 4/23/22.
//

#import "ViewController.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
    
    // create image view
    UIImageView *chimpImageView;
    chimpImageView = [[UIImageView alloc] init];
    
    // create image
    UIImage *chimpImage;
    chimpImage= [UIImage imageNamed: @"chimp"];
    
    chimpImageView.image = chimpImage;
    
    chimpImageView.frame = CGRectMake(0, self.view.frame.size.width * 0.1, self.view.frame.size.width, self.view.frame.size.width * 0.7);
    [self.view addSubview:chimpImageView];
}


@end
